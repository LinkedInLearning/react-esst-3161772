import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { MemoCard } from "./components/MemoCard";

it("renders without crashing", () => {
  render(<MemoCard front="Hey" back="Ho" />);
});

it("shows the front initially", () => {
  render(<MemoCard front="Foo?" back="Bar!" />);
  const vorderseite = screen.queryByText("Foo?");
  const rueckseite = screen.queryByText("Bar!");
  expect(vorderseite).toBeInTheDocument();
  expect(rueckseite).toBeNull();
});

it("switches sides when being clicked", () => {
  render(<MemoCard front="Foo?" back="Bar!" />);
  const rootDiv = screen.getByTestId("clickme");
  fireEvent.click(rootDiv);

  const vorderseite = screen.queryByText("Foo?");
  const rueckseite = screen.queryByText("Bar!");
  expect(rueckseite).toBeInTheDocument();
  expect(vorderseite).toBeNull();
});
