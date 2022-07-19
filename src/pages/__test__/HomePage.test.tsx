import Header from "../../components/Header";
import NiceModal from "@ebay/nice-modal-react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export type HomePageProps = {
  children: React.ReactNode;
};

const wrapper = ({ children }: HomePageProps) => {
  return <NiceModal.Provider>{children}</NiceModal.Provider>;
};
describe("Home Page should display a title and a button Ajouter that display a modal", () => {
  beforeEach(async() => {
    render(<Header />, { wrapper });
  });

  test("Home Page should have a title Destination on the Header of the page", async () => {
    await waitFor(() => screen.findByText("Destinations"));
  });
  
  test("Home Page should have a button Ajouter on the Header of the page", async () => {
    await screen.findByText("Ajouter", { exact: false });
  });

  test("When User click on button + Ajouter , modal should open with a form", async () => {
    const btnAddDestination = screen.getByRole("button", {
      name: "btn-add-destination",
    });
    userEvent.click(btnAddDestination);
    const modalTitle = await screen.findByText(
      "Ajouter une nouvelle destination"
    );

    await waitFor(() => {expect(modalTitle).toBeInTheDocument();});
    await screen.findByTestId("area");
    expect(screen.getByRole("button", { name: "btn-cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "btn-submit-form" })).toBeInTheDocument();
    //at least show that there is an input Superficie and 2 button cancel & confirm
    // element should display with screen.logTestingPlaygroundURL()
  });

  test("When user open a modal and push escape on keyboard, modal should close", async () => {
    const btnAddDestination = screen.getByRole("button", {
      name: "btn-add-destination",
    });
    userEvent.click(btnAddDestination);
    const btnCancel = screen.getByRole("button", { name: "btn-cancel" });
    fireEvent.keyPress(btnCancel, { key: "Escape", code: "Escape" });
    const el = await screen.findByText('Ajouter une nouvelle destination');
    waitForElementToBeRemoved(el);
  });
});
