import { render, screen } from "@testing-library/react";
import Home from "../components/pages/Home/Home";


describe("Home Component Testing", () =>{
    test("Check If  descriptive placeholder is set", () => {
        render(<Home />);
        const element = screen.getByPlaceholderText(
          "Type github username or name to search"
         );
        expect(element).toBeTruthy();
      });

      test("Check If Header Label is set as additional descriptive info for user", () => {
        render(<Home />);
        const element = screen.getByTestId('header-label');
        expect(element).toBeTruthy();
      });


      test("Check if textfield is enabled for search term to be typed", () => {
        render(<Home />);
        const element = screen.getByTestId('usersearch-input');
        expect(element.disabled).toBe(false);
      });
      
   
      test("check if search button is enabled for search event to be triggered", () => {
        render(<Home />);
        const element = screen.getByTestId('usersearch-button');
        expect(element.disabled).toBe(false);
      });

   

}); 





