import {z} from "zod";

export const contact = z.object({
    name: z.string()
        .min(3,"É necessário ter no minímo 3 caracteres"),
    email: z.string()
        .email("O email é obrigatório"),
    phone: z.string()
        .min(11,"Número de telefone incompleto")
        .max(18,"Número de telefone inválido"),
    message: z.string()
        .min(1, "É necessário ter no minímo 1 caractere")  
})