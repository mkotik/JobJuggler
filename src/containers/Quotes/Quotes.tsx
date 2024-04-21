import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { QuoteType } from "../../config/types";
import { getQuotes } from "../../services/quoteServices";

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
    <Box>
      <p>Quotes</p>
    </Box>
  );
};

export default Quotes;
