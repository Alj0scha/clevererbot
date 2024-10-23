import { ChatGPTAPI } from 'chatgpt'

const api = new ChatGPTAPI({
    apiKey: import.meta.env.OPENAI_API_KEY,
})

export async function POST({ request }) {
    const prompt = await request.text()
    console.log({ prompt })

    // Do things
    const response = await api.sendMessage(prompt)

    return new Response(response.text)
}
