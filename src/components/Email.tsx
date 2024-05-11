import React from "react";

const Email = ({ message }: { message: string }) => {
  return (
    <html>
      <body>
        <p className="text-lg text-balance font-semibold">{message}</p>
      </body>
    </html>
  );
};

export default Email;
