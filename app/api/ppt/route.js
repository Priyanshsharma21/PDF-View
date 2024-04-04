import axios from 'axios';
import { supabase } from '../../../supabase/supabase.js';

export const POST = async (request) => {
    const { pdfData } = await request.json();

    try {
        const binaryData = Buffer.from(pdfData, 'base64');

        const data = new FormData();
        data.append('file', binaryData, { filename: 'file.pptx', contentType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });

        const options = {
            method: 'POST',
            url: 'https://convert-to-pdf1.p.rapidapi.com/convert',
            headers: {
                'X-RapidAPI-Key': 'c4f5254226msh10570caa9c1f5f8p1def93jsnb6055c72ecd0',
                'X-RapidAPI-Host': 'convert-to-pdf1.p.rapidapi.com',
                ...data.getHeaders(),
            },
            data: data
        };

        const response = await axios.request(options);

   
        const { data: insertedData, error } = await supabase
            .from('pdfs')
            .insert([{ pdf: response.data }])
            .select();

        if (error) {
            throw error;
        }

        return new Response(JSON.stringify(insertedData), { status: 201 });
    } catch (error) {
        return new Response("Failed to convert or store PDF", { status: 500 });
    }
};
