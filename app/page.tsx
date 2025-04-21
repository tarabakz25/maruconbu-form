'use client'
import { useState } from 'react'
import { supabase } from '@/utils/supabase/client'

export default function Home() {
  const [name, setName] = useState('')
  const [participation, setParticipation] = useState(false)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const { error } = await supabase
      .from('forms')
      .insert({
        name,
        participation
      })

    if(error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
    }
  }

  return (
    <main className="p-6 h-screen w-screen mx-auto text-center flex flex-col justify-center items-center bg-white text-black font-['ab-don']">
      <h1 className="text-2xl mb-4">まるごとコンテスト部参加フォーム</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={participation}
            onChange={(e) => setParticipation(e.target.checked)}
            className="form-checkbox"
          />
          <span>参加する</span>
        </label>

        {status !== "success" && (
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {status === "submitting" ? "送信中..." : "送信する"}
          </button>
        )}
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600">送信が完了しました！</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">送信に失敗しました。</p>
      )}
    </main>
  )
}