import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { QuoteType } from "../../config/types";
import { getQuotes } from "../../services/quoteServices";
import QuotesTable from "./QuoteTable";
import "./quotes.scss";

const Quotes = () => {
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
      <QuotesTable quotes={quotes} />
    </Box>
  );
};

export default Quotes;
