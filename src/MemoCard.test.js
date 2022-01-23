import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { MemoCard } from "./components/MemoCard";

beforeAll(() => {
  console.log(
    "Starting a server or setting a clock..."
  );
});

let rootDiv;
beforeEach(() => {
  render(<MemoCard front="Foo?" back="Bar!" />);
  rootDiv = screen.getByTestId("clickme");
});

it("renders without crashing", () => {
  expect(rootDiv).not.toBeNull();
});

it("has card class in root element", () => {
  expect(rootDiv).toHaveClass("card");
});

it("shows the front initially", () => {
  const vorderseite = screen.queryByText("Foo?");
  const rueckseite = screen.queryByText("Bar!");
  expect(vorderseite).toBeInTheDocument();
  expect(rueckseite).toBeNull();
});

it('has label with text "Front"', () => {
  const label = screen.getByTestId("label");
  expect(label).toHaveTextContent("Front");
});

it("switches sides when being clicked", () => {
  fireEvent.click(rootDiv);

  const vorderseite = screen.queryByText("Foo?");
  const rueckseite = screen.queryByText("Bar!");
  expect(rueckseite).toBeInTheDocument();
  expect(vorderseite).toBeNull();
});

it("throws error when props are missing", () => {
  console.error = jest.fn();
  expect(() => {
    return render(<MemoCard />);
  }).toThrow();
});
