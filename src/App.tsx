import React from "react";
import logo from "./logo.svg";
import { Button, ConfigProvider, Form } from "antd";
import "./App.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { esESIntl, ModalForm } from "@ant-design/pro-components";
const { Item } = Form;

function App() {
  const wrapperStyle = {
    border: "1px solid #969696",
  };
  const editorStyle = {
    height: "10rem",
    padding: "1rem",
  };
  const [form] = Form.useForm();

  return (
    <ConfigProvider locale={esESIntl}>
      <ModalForm
        form={form}
        trigger={<Button>boton</Button>}
        initialValues={{
          description: `<div class="slate-p">Esto es una prueba con varios puntos:</div><ul class="slate-ul"><li class="slate-li"><div style="position:relative">Punto1</div></li><li class="slate-li"><div style="position:relative">Punto2</div></li></ul>`,
        }}
      >
        <Item label="Descripcion" name="description">
          <Editor
            toolbar={{
              options: [
                "inline",
                "fontSize",
                "fontFamily",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "embedded",
                "emoji",
                "image",
              ],
              inline: {
                inDropdown: true,
              },
            }}
            wrapperStyle={wrapperStyle}
            editorStyle={editorStyle}
          />
        </Item>
      </ModalForm>
    </ConfigProvider>
  );
}

export default App;
