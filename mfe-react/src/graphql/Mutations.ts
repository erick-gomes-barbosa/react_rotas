import { gql } from "@apollo/client"

export const INSERT_TEST_FORM = gql `
    mutation MyMutation($ppl_idade: numeric = "", $ppl_nome: String = "", $ppl_sexo: String = "") {
        insert_people_one(object: {ppl_idade: $ppl_idade, ppl_nome: $ppl_nome, ppl_sexo: $ppl_sexo}) {
            ppl_id
            ppl_idade
            ppl_nome
            ppl_sexo
        }
    }
`;
