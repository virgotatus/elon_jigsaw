import React from "react";

const Bot = () => {
  const difyChatbotConfig = {
    token: "1qYITfQUEUsPv6Db",
  };
  return (
    <div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.difyChatbotConfig = ${JSON.stringify(difyChatbotConfig)};
          `,
        }}
      />
      <script
        src="https://udify.app/embed.min.js"
        id="1qYITfQUEUsPv6Db"
        defer
      ></script>
    </div>
  );
};

export default Bot;
