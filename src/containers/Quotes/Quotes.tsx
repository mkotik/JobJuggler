import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { ClientType } from "../Clients/clientsTypes";
import { getQuotes } from "../../services/quoteServices";

const Quotes = () => {
  const [quotes, setQuotes] = useState<ClientType[]>([]);
  useEffect(() => {
    const loadQuotes = async () => {
      const data: ClientType[] = await getQuotes();
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
