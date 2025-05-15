import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3, "É necessário ter no minimo 3 caracteres"),
    email: z.string().email("O email é inválido"),
    phone: z.string().min(10,"Número de telefone incompleto").max(11,"Número de telefoone inválido").regex(/^\d+$/, 'Telefone deve conter apenas números'),
    city: z.string().min(3,"É necessário ter pelo menos 3 caracteres")
})