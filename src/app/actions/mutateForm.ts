'use server'

import { auth } from "@/auth"
import { db } from "@/db"
import { forms, questions as dbQuestions } from "@/db/schema"

export async function saveForm(data) {
    const { name, description, questions } = data
    const session = await auth()
    const userId = session?.user?.id

    const newForm = await db.insert(forms).values({
        name,
        description,
        userId,
        published: false
    }).returning({
        insertedId: forms.id
    })
    const formId = newForm[0].insertedId
    return formId

    // TODO: add questions and options
}