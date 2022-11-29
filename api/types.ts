
enum Difficult{

}

export type FastTwo = { 
    "success": boolean,
    "data": string[],
    "message": string,
    "count": number
}

export type Quiz = { 
    "title": string,
    "image": string,
    "questions_count": number,
    "difficulty": string,
    "time": number,
}

export type User = { 
        user:string []

}
/**
 * "id": number,
        "name": string | null,
        "surname": string | null,
        "phone": number | null,
        "email": string,
        "email_verified_at": string,
        "invited_by": string | null,
        "points": number,
        "avatar_path": string | null,
        "created_at": string | null,
        "updated_at": string | null,
 * 
 */