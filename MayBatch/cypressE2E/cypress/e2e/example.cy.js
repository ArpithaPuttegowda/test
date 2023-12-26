// openai_chat_spec.js

describe('OpenAI Chat Application Tests', () => {
    beforeEach(() => {
      // Visit the OpenAI Chat application before each test
      cy.visit('https://chat.openai.com/');
    });
  
    it("should show some text",()=>{
        cy.get('[data-testid="login-button"]').click()
    })
  });
  