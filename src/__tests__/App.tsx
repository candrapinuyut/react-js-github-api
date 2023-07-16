import { render,fireEvent, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act } from "react-dom/test-utils";
import App from '../App';
const queryClient = new QueryClient();
const AppCom=(
    <QueryClientProvider client={queryClient}>
    <App/>
    </QueryClientProvider> 
)
function stringGen(len:number) {
    var text = "";
    
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    
    return text;
  }
const mainBtn:any='main-btn';
const mainInput='main-input';
const mainForm='main-form';

describe('Render main page',() => {
    it('Render the github page',()=>{
        const {getByTestId} = render(AppCom)
        expect(getByTestId('main-input')).toBeInTheDocument()
    })
    it('Render all form,input,button',()=>{
        const {getByTestId} = render(AppCom)

        expect(getByTestId('main-input')).toBeInTheDocument()
        expect(getByTestId('main-btn')).toBeInTheDocument()
        expect(getByTestId('main-form')).toBeInTheDocument()
    })
});
describe("Form behaviour",  () => {
    it('validate user inputs, and provides error empty messages', async () => {
        const {getByTestId,queryByText} = render(AppCom)
        await act (async()=>{
            //testing for empty input
            fireEvent.change(screen.getByTestId(mainInput),{target:{value:''}})
        })
        await act (async () => {
            fireEvent.submit(getByTestId(mainForm))
        });
        expect(queryByText("please input of a github username")).toBeInTheDocument();
    })
    it('validate user inputs, and provides error messages when input >= 39 character', async () => {
        const {getByTestId,queryByText} = render(AppCom)
        await act (async()=>{
            //testing for empty input
            let randomStr= stringGen(40)
            fireEvent.change(screen.getByTestId(mainInput),{target:{value:randomStr}})
        })
        await act (async () => {
            fireEvent.submit(getByTestId(mainForm))
        });
        expect(queryByText("maximum of username lenghth is 39")).toBeInTheDocument();
    })
    it('should be input and button search as disabled during a search', async () => {
        const {getByTestId} = render(AppCom)
        await act (async()=>{
            //testing for empty input
            let randomStr= stringGen(4)
            fireEvent.change(screen.getByTestId(mainInput),{target:{value:randomStr}})
        })
        await act (async () => {
            const form = fireEvent.submit(getByTestId(mainForm))
        });
        expect (getByTestId(mainBtn).closest('button')).toHaveAttribute('disabled')
        expect (getByTestId(mainInput).closest('input')).toHaveAttribute('disabled')
     })

 

})