import { Component } from "react";
import { toast } from "react-toastify";
class toDolist extends Component {
  state = {
    newtodo: "",
    todoess: [],
  };

  onNewtodoChange = (e) => {
    this.setState({ newtodo: e.target.value });
  };

  onAddNewTodo = () => {
    const { newtodo, todoess } = this.state;
    if (!newtodo) {
      // toast("Enter a valid TO-Do");
      toast.error(" Enter a valid TO-Do so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (todoess.includes(newtodo.toLowerCase())) {
      // toast("This TO-DO already Exist");
      toast.error(" This TO-DO already Exist!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    this.setState({
      todoess: [newtodo.toLowerCase(), ...todoess],
      newtodo: "",
    });
    toast(`${newtodo}  Added successfully in your TO-DO`);
  };

  render() {
    const { newtodo, todoess } = this.state;
    console.log("Re-Render: ", { newtodo, todoess });
    return (
      <div>
        <div
          className="form-element"
          style={{
            display: "flex",
            justiflyContent: "center",
            padding: "70px",
          }}
        >
          <h1>Your TO-DO App </h1>
          <input
            style={{ outline: "none", width: "200px", padding: "50px" }}
            type="text"
            value={newtodo}
            onChange={this.onNewtodoChange}
            placeholder=" What to-do? Just Add and DO "
          />

          <button
            onClick={this.onAddNewTodo}
            style={{ width: "100px", fontWeight: 600 }}
          >
            Add
          </button>
          <button onClick={this.onDeleteNewTodo}>Delete</button>
          <button>Update</button>
        </div>
        {/* <div
          style={{
            display: "flex",
            justiflyContent: "center",
            padding: "80px",
          }}
        >
          Your To-Do List :: {todoess}
        </div> */}
        <div>
          <h1>Your To-Do List </h1>
          <hr />
          <ul>
            {todoess.map((current) => {
              return (
                <li style={{ textTransform: "capitalize" }} key={current}>
                  {current}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default toDolist;
