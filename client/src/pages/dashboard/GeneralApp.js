import React from "react";
import Chats from "./Chats";
import { Box, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom"
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

import NoChat from "../../assets/Illustration/NoChat";
import ChatComponent from "./Conversations";
const GeneralApp = () => {

  const [searchParams] = useSearchParams();

  const theme = useTheme();
  const { sidebar, chat_type, room_id } = useSelector((store) => store.app);// access our store inside component
  return (
    <Stack direction='row' sx={{ width: '100%' }}>
      {/* Chats */}
      <Chats />

      <Box
          sx={{
            height: "100%",
            width: `calc(100vw - 740px )`
              ,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FFF"
                : theme.palette.background.paper,
            borderBottom:
              searchParams.get("type") === "individual-chat" &&
              searchParams.get("id")
                ? "0px"
                : "6px solid #0162C4",
          }}
        >
        {/* Conversation */}
        {room_id !== null && chat_type === "individual" ? <ChatComponent /> :
          <Stack spacing={2} sx={{ height: "100%", width: "100%" }} alignItems="center" justifyContent={"center"}>
            <NoChat />
            <Typography variant="subtitle2">
              Select a conversation
            </Typography>
          </Stack>
        }
   

      </Box>
      {/* Contact */}
      {sidebar.open && (() => {
        switch (sidebar.type) {
          case 'CONTACT':
            return <Contact />

         
          default:
            break;
        }
      })()}

    </Stack>
  );
};

export default GeneralApp;
