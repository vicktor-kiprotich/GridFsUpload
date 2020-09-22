import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
export default function Home() {
  const [photo, setPhoto] = useState("");
  const fetchPhotos = async () => {
    const response = await axios.post(`/uploads`);

    setPhoto(response.data);

  };
  useEffect(() => {
    fetchPhotos(photo);
  });
 const handleSubmit=(e)=>{
  e.preventDefault()
  fetchPhotos(photo);
 }
  return (
    <div>
      <Form>
        <Form.File name='photo' id="custom-file" label="Custom file input" custom />

        <Button type='submit'  onSubmit={handleSubmit}>Upload </Button>
      </Form>
    </div>
  );
}
