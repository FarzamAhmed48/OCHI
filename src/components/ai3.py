# List of PreDefined Questions
questions_list= {
    "what is reactjs?" : "ReactJS is a JavaScript library for building user interfaces, developed by Facebook.",
    "what are the key features of reactjs?" : "Key features include virtual DOM, component-based architecture, JSX syntax, and uni-directional data flow.",
    "what is jsx?" : "JSX is a syntax extension for JavaScript used with React to describe what the UI should look like.",
    "what is a component in reactjs?" : "A component is a reusable piece of code that defines how a part of the user interface should appear and behave.",
    "how do you create a component in reactjs?" : "You can create a component by extending the React.Component class or by using functional components.",
    "what is the difference between state and props in reactjs?" : "State is internal to a component and can be modified, while props are external inputs passed to a component.",
    "how do you manage state in reactjs?" : "State is managed using the setState method within a component, and it should be modified using immutable operations.",
    "what is the virtual dom in reactjs?" : "The virtual DOM is a lightweight copy of the real DOM, which React uses to efficiently update the actual DOM.",
    "what is the purpose of key attribute in react lists?" : "The key attribute is used to uniquely identify elements in a list, aiding React in efficient rendering and updating.",
    "what is a higher-order component (hoc)?" : "A higher-order component is a function that takes a component and returns a new component with additional functionalities.",
    "what is the useeffect hook used for?" : "The useEffect hook is used for performing side effects in functional components, such as data fetching or DOM manipulation.",
    "what is redux, and how does it relate to reactjs?" : "Redux is a state management library for JavaScript applications, often used with React to manage application state in a predictable manner.",
    "what is the purpose of react router?" : "React Router is a library for routing in React applications, allowing for navigation between different components based on the URL.",
    "what are controlled and uncontrolled components in reactjs?" : "Controlled components are components where form data is handled by React, while uncontrolled components handle form data directly through the DOM.",
    "what is the context api in reactjs?" : "The context API is a feature in React for passing data through the component tree without having to pass props down manually at every level.",
    "what is the difference between a functional component and a class component in reactjs?" : "Functional components are written as JavaScript functions, while class components are ES6 classes that extend React.Component.",
    "what is the purpose of the shouldcomponentupdate method?" : "The shouldComponentUpdate method is used to optimize performance by determining if a component should re-render when its state or props change.",
    "what are react hooks?" : "React hooks are functions that enable functional components to use state and other React features without writing a class.",
    "what is the usestate hook used for?" : "The useState hook is used in functional components to add local state management.",
    "what is the usecallback hook?" : "The useCallback hook is used to memoize functions so that they are only re-created when their dependencies change.",
    "what is the usememo hook?" : "The useMemo hook is used to memoize expensive computations so that they are only re-evaluated when their dependencies change.",
    "what is the useref hook?" : "The useRef hook is used to create a mutable reference that persists across re-renders in functional components.",
    "what is the usecontext hook?" : "The useContext hook is used to consume values from the context API in functional components.",
    "how do you handle forms in reactjs?" : "Forms in React can be handled using controlled components, where form data is managed by React, or uncontrolled components, where form data is handled by the DOM.",
    "what is the purpose of the componentDidCatch method?" : "The componentDidCatch method is used to handle errors that occur within a component's tree during rendering.",
    "what is the react devtools?" : "React DevTools is a browser extension that allows developers to inspect React component hierarchies, state, and props in Chrome and Firefox.",
    "what is the purpose of the usestate hook?" : "The useState hook is used to add state management to functional components in React.",
    "what is the purpose of the useeffect hook?" : "The useEffect hook is used to perform side effects in functional components, such as data fetching or subscribing to external events.",
    "how do you update state in reactjs?" : "State in React can be updated using the setState method within a component, triggering a re-render of the component with the updated state.",
    "what are fragments in reactjs?" : "Fragments are a way to group multiple children elements without adding extra nodes to the DOM, useful for returning multiple elements from a component render method."
}

def respond_to_question(question):
    question = question.lower()
    if question in questions_list:
        return questions_list[question]
    else:
        return "I'm sorry, I don't understand that question."


while True:
    user_input = str(input("You: "))
    response = respond_to_question(user_input)
    print("ChatBot:", response)