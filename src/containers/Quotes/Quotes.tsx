import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuoteType } from "../../config/types";
import { getQuotes } from "../../services/quoteServices";
import QuotesTable from "./QuoteTable";
import "./quotes.scss";

const Quotes = () => {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  useEffect(() => {
    const loadQuotes = async () => {
      const data: QuoteType[] = await getQuotes();
      setQuotes(data);
    };
    loadQuotes();
  }, []);
  return (
    <Box width="100%" padding="20px">
      <Button variant="contained" onClick={() => navigate("add-quote")}>
        New Quote
      </Button>
      <QuotesTable quotes={quotes} />
    </Box>
  );
};

export default Quotes;
