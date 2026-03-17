import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    // Navigate to search results page with query
    navigate(`/search?medicine=${query}`);
  };

  return (
    <Form onSubmit={handleSearch} className="mt-4">
      <InputGroup className="shadow-sm">
        <Form.Control
          type="text"
          placeholder="Search medicines (e.g. Paracetamol)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="py-3"
        />

        <Button variant="primary" type="submit" className="px-4">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;