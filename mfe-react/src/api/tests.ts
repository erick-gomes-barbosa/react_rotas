import { gql, useMutation, useQuery } from "@apollo/client";
import { INSERT_TEST_FORM } from "../graphql/Mutations";
import { SELECT_PEOPLE } from "../graphql/Query";
import { nhost } from "../utils/nhost";

const login = async () => {
    const { session, error } = await nhost.auth.signIn({
        email: "erick.barbosa@baymetrics.com.br",
        password: "Tr@oper5"
    })
}

export const setMutation = () => {
    login();
    const [mutation, { loading, error }] = useMutation(INSERT_TEST_FORM);
    const insertPeople = async (objects: any) => {
        try {
            const response = await mutation({
                variables: {
                    objects,
                },
            });
            const insertedData = response.data?.insert_people_one;
            return insertedData
        } catch (e) {
            console.error(`Erro ao inserir pessoa: ${e}`);
            throw e;
        }
    } 
    return {
        insertPeople,
        loading,
        error,
    };
};

export const getPeople = () => {
    const {data, error} = useQuery(SELECT_PEOPLE);
    return {data, error};
}