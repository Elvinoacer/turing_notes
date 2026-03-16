// What a parallel response looks like
const parallelResponse = {
  stop_reason: "tool_use",
  content: [
    {
      type: "tool_use",
      id: "toolu_01", // ← first tool call
      name: "search_inbox",
      input: { query: "Bob" },
    },
    {
      type: "tool_use",
      id: "toolu_02", // ← second tool call
      name: "send_email",
      input: {
        to: "alice@example.com",
        subject: "Reply",
        body: "Hi Alice!",
      },
    },
  ],
};
