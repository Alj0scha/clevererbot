import { ChatGPTAPI } from 'chatgpt'

const api = new ChatGPTAPI({
    apiKey: import.meta.env.OPENAI_API_KEY,
})

export async function POST({ request }) {
    const { id, prompt } = await request.json()
    console.log({ prompt })

    // Do things
    const response = await api.sendMessage(prompt, {
        parentMessageId: id,
    })

    return new Response(JSON.stringify({ text: response.text, id: response.id }))
}
