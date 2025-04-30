import { DynamicForm, FormProps, refFormProps } from "trustechreact-components";
import React from "react";

const DynamicFormView = () => {
    const refForm = React.useRef<refFormProps>(null);

    const form: FormProps = {
        id: "formTeste",
        options: {
            resetAfterSubmit: true,
        },
        fields: [
            {
                id: "nome",
                label: "Nome",
                type: "input_text",
                disabled: false,
                value: "Erick"
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
                ]
            }
        ]
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <DynamicForm ref={ refForm } form={form} onSubmit={(values) => {console.log(values)}}/>
            <button onClick={() => refForm.current.submit()}>Cadastrar</button>
        </div>
    )
}

export default DynamicFormView;