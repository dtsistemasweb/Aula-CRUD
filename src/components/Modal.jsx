import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { UseDataContext } from "../context/context";

function ModalPage({ edit, setEdit, data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [body, setBody] = useState();
  const { handleCreate, handleArticlesResult, handleUpdate } = UseDataContext();

  useEffect(() => {
    if (edit) {
      setTitle(data.title);
      setDescription(data.description);
      setBody(data.body);
      setModalOpen(true);
    }
  }, [edit]);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const customStyles = {
    content: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      top: "100px",
      left: "100px",
      right: "100px",
      bottom: "100px",
      backgroundColor: "#ccc",
    },
  };

  async function onSubmit(e) {
    e.preventDefault();
    const create = await handleCreate(title, description, body);
    if (create.status === 201) {
      setModalOpen(false);
      setTitle();
      setBody();
      setDescription();
      await handleArticlesResult();
    }
  }

  async function onUpdate(e) {
    e.preventDefault();
    const create = await handleUpdate(title, description, body, data.id);
    console.log(create);
    if (create.status === 200 || 201) {
      setModalOpen(false);
      setTitle();
      setBody();
      setDescription();
      await handleArticlesResult();
    }
  }

  return (
    <>
      <button onClick={openModal}>Adicionar</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h2>{edit ? "Editar Artigo" : "Criar Artigo"}</h2>
          <button
            onClick={closeModal}
            style={{ position: "absolute", top: "20px", right: "20px" }}
          >
            X
          </button>
        </div>

        <form style={{ display: "flex" }} onSubmit={edit ? onUpdate : onSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <input
              type="text"
              placeholder="Titulo"
              style={{ marginBottom: "10px", padding: "10px" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Descricao"
              style={{ marginBottom: "10px", padding: "10px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <textarea
              rows={30}
              style={{ marginBottom: "10px", padding: "10px" }}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button style={{ padding: "10px" }}>
              {edit ? "Editar" : "Criar"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default ModalPage;
