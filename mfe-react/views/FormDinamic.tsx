import { DynamicForm, FormProps, refFormProps, zodRequired } from "trustechreact-components";
import React from "react";
import { z } from "zod";
import setMutation from "../api/tests"

type FormValues = {
    nome: string;
    idade: number;
    sexo: {
        label: string;
        values: string;
    };
}

const DynamicFormView = () => {
    const refForm = React.useRef<refFormProps>(null);
    const {mutation, data} = setMutation();

    const form: FormProps = {
        id: "formTeste",
        options: {
            resetAfterSubmit: true,
            schema: z.object({
                nome: zodRequired("Campo Obrigatório!"),
                idade: zodRequired("Campo Obrigatório!"),
                sexo: zodRequired("Campo Obrigatório!")
            })
        },
        fields: [
            {
                id: "nome",
                label: "Nome",
                type: "input_text",
                disabled: false,
                required: true,
                onChange: (value: any) => { 
                    if (value.target.value == "caba macho") {
                        refForm.current.setValues({
                            sexo: {
                                label: "Masculino",
                                values: "M"
                            }
                        })
                    }
                }
            },
            {
                id: "idade",
                label: "Idade",
                type: "input_text",
                disabled: false,
            },
            {
                id: "sexo",
                label: "Sexo",
                type: "select_input",
                options: [
                    {
                        label: "Masculino",
                        values: "M"
                    },
                    {
                        label: "Feminino",
                        values: "F"
                    },
                    {
                        label: "Não-Binário",
                        values: "NB"
                    }
                ],
                required: true,
            },
        ]
    }

    const onSubmit = async (values: FormValues) => {
        const form = {idade: values.idade, nome: values.nome, sexo: values.sexo.values}
        await mutation({variables: {form}});
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1rem",backgroundColor: "#7777e0", borderRadius: "30px" }}>
            <DynamicForm ref={ refForm } form={form} onSubmit={onSubmit}/>
            <button style={{backgroundColor: "#aaaaf4", padding: "2px 10px", borderRadius: "20px"}} onClick={() => refForm.current.submit()}>Cadastrar</button>
        </div>
    )
}

export default DynamicFormView;