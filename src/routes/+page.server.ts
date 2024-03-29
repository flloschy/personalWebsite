import type { Actions } from "@sveltejs/kit";
import { WEBHOOK } from '$env/static/private';
export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const email = data.get('email') as string
        const title = data.get('title') as string
        const msg = data.get('message') as string

		if (email.length > 256) return
		else if (email.length == 0) return
		else if (!email.match(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm)) return

		if (title.length > 256) return
        else if (email.length == 0) return
        else if (!title.match(/^[\w.,ßöäüÖÄÜ ]+$/g)) return

		if (msg.length > 4096) return
        else if (msg.length == 0) return

        await fetch(WEBHOOK, {
            method:'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "embeds": [
                    {
                    "title": title,
                    "description": msg,
                    "color": 3459607,
                    "author": {
                        "name": email
                    },
                    "timestamp": new Date().toISOString()
                    }
                ]
            })
    })

    }
};