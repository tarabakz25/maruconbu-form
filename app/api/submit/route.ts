import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"

export async function POST(request: NextRequest) {
    const { name, jointheclub } = await request.json()

    const supabase = await createClient()

    const { data, error } = await supabase.from('forms2').insert({
        name,
        jointheclub
    })

    if (error) {
        console.error("Supabase insert error:", error); // エラーログを追加
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
}