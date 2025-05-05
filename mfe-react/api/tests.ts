import { gql, useMutation } from "@apollo/client";

const INSERT_TEST_FORM = gql `
    mutation MyMutation($object: teste_treinamento_insert_input = {}) {
        insert_teste_treinamento_one(object: $object) {
            idade
            nome
            sexo
        }
    }
`;

type TestFormValues = {
    idade: number;
    nome: string;
    sexo: string;
};

const setMutation = () => {
    const [mutation, {data}] = useMutation(INSERT_TEST_FORM);

    return{mutation, data}
};

export default setMutation;