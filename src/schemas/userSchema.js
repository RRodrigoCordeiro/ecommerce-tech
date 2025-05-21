import { z } from "zod";

export const userSchema = z.object({
    name: z.string()
        .min(3, "É necessário ter no minimo 3 caracteres"),
    email: z.string()
        .email("O email é inválido"),
    phone: z.string()
        .min(13,"Número de telefone incompleto")
        .max(18,"Número de telefone inválido"),
        
    cep: z.string()
        .min(8,"É necessário ter pelo menos 9 caracteres")
        .max(10,"CEP inválido"),
    region: z.string()
        .min(4, "É necessário ter pelo menos 4 caracteres")
        .max(18, "É necessário ter no máximo 18 caracteres"),
    patio: z.string()
        .min(1, "Este campo é obrigatório")
        .max(50,"É necessário ter no máximo 50 caracteres"),
    complement: z.string()
        .min(3,"É necessário ter no minimo 3 caracteres")
        .max(50,"É necessário ter no máximo 50 caracteres"),
    neighborhood: z.string()
        .min(3, "É necessário ter no mínimo 3 caracteres")
        .max(50,"É necessário ter no máximo 50 caracteres"),
    locality: z.string()
        .min(3, "É necessário ter no mínimo 3 caracteres")
        .max(50,"É necessário ter no máximo 50 caracteres"),
    uf: z.string()
        .length(2, "A UF deve conter exatamente 2 caracteres"),
})