import React, { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/home.module.css";
import Button from "../components/Button";
import Input from "../components/Input";

const Create = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    salary: "",
  });
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <main>
          <h2>Create</h2>
          <form>
            <Input
              name="title"
              aria-label="Title"
              placeholder="Title"
              onChange={(e) => handleChange(e)}
              value={form.title}
            />

            <Input
              name="description"
              aria-label="Description"
              placeholder="Description"
              onChange={(e) => handleChange(e)}
              value={form.description}
            />

            <Input
              name="salary"
              aria-label="Salary"
              placeholder="Salary"
              onChange={(e) => handleChange(e)}
              value={form.salary}
            />
            <Button variant="primary" handleClick={() => handleSubmit()}>
              Submit
            </Button>
          </form>
        </main>
      </div>
    </Layout>
  );
};

export default Create;
