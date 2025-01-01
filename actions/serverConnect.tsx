'use server'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export async function serverConnect() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: Book_Catalog } = await supabase.from('Book_Catalog').select();
      
    //return <pre>{JSON.stringify(Book_Catalog, null, 2)}</pre>
    return Book_Catalog;
}