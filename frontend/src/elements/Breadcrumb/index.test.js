import { render } from "@testing-library/react";
import Breadcrumb from ".";
import { BrowserRouter } from "react-router-dom";

const setup = () => {
  const data = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const { container } = render(
    <BrowserRouter>
      <Breadcrumb data={data}></Breadcrumb>
    </BrowserRouter>
  );

  return container.querySelector(".breadcrumb");
};

test("Should have <ol> tag with className .breadcrumb and have text Home & House Details", () => {
  const breadcrumb = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("House Details");
});
