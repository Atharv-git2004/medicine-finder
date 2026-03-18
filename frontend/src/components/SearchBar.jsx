import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react"; // Ithu install cheyyanam: npm install lucide-react

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?medicine=${query}`);
  };

  return (
    <Form onSubmit={handleSearch} className="w-100">
      <InputGroup className="bg-white rounded-pill overflow-hidden shadow-sm border p-1">
        {/* Location Indicator (Optional but looks professional) */}
        <InputGroup.Text className="bg-transparent border-0 d-none d-md-flex ps-3">
          <MapPin size={18} className="text-primary" />
          <span className="ms-2 small fw-bold text-muted">Calicut</span>
        </InputGroup.Text>
        
        <div className="vr d-none d-md-block my-2 mx-2 text-muted opacity-25"></div>

        {/* Search Input */}
        <Form.Control
          type="text"
          placeholder="Search medicines, health products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-0 py-3 shadow-none bg-transparent ps-3 ps-md-2"
          style={{ fontSize: '1rem' }}
        />

        {/* Search Button */}
        <Button 
          variant="primary" 
          type="submit" 
          className="rounded-pill px-4 d-flex align-items-center gap-2 shadow-sm transition-all m-1"
        >
          <Search size={18} />
          <span className="d-none d-sm-inline">Find Now</span>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;