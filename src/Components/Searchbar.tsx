import { Button, Form, Input, type FormProps } from "antd";

type FieldType = {
  nombre?: string;
};

const Searchbar = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      id="searchbar"
    >
      <Form.Item<FieldType> name="nombre">
        <Input placeholder="Ingresa tu producto..." />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Buscar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Searchbar;
