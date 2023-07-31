import { Button, Form, Modal } from "react-bootstrap"
import { useRef ,useState} from "react"
import { useExpenses } from "../contexts/ExpenseContext"

export default function AddExpenseModel({show,handleClose}) {
    const nameRef = useRef()
    const categoryRef = useRef()
    const dateofexpenseRef = useRef()
    const amountRef = useRef()
    const createdbyRef = useRef()
    const {addExpense} = useExpenses()
    const [nameError, setNameError] = useState("");
    const [amountError, setAmountError] = useState();
    const [categoryOptions] = useState(["Health", "Electronics", "Travel" , "Education" , "Books" , "Others"]);
    function handleSubmit(e) {
        e.preventDefault();
        const nameValue = nameRef.current.value;
        const amountValue=amountRef.current.value;
        if (nameValue.length > 140) {
            setNameError("Name should be limited to 140 characters.");
            return;
        }
        if (amountValue < 0) {
            setAmountError("amount should be positive.");
            return;
        }
        addExpense(
            {
                name:nameRef.current.value,
                category:categoryRef.current.value,
                dateofexpense:dateofexpenseRef.current.value,
                amount:amountRef.current.value,
                createdby:createdbyRef.current.value,
            }
        )
        handleClose()
    }

  return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title >New Expense</Modal.Title>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                ref = {nameRef} 
                                type="text" 
                                required/>
                             {nameError && <div className="text-danger">{nameError}</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Select ref={categoryRef} required>
              <option value="">Select a category</option>
              {categoryOptions.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
                        <Form.Group className="mb-3" controlId="dateofexpense">
                            <Form.Label>Date Of Expense</Form.Label>
                            <Form.Control 
                                ref = { dateofexpenseRef }
                                type="date" 
                                required
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control 
                                ref = {amountRef}
                                type="number" 
                                required/>
                                {amountError && <div className="text-danger">{amountError}</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createdby">
                            <Form.Label>Created By</Form.Label>
                            <Form.Control 
                                ref = { createdbyRef }
                                type="text" required/>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">Add</Button>
                        </div>
                    </Modal.Body>
            </Modal.Header>
        </Form>
    </Modal>

  )
}


