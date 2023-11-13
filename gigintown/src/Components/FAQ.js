import Nav from "./Nav";

function FAQ() {
  return (
    <>
      <Nav />
      <div className="wrapper bg-white rounded shadow">
        <div className="h3 text-primary text-center">How can we help you?</div>
        <div className="d-flex justify-content-center"></div>
        <div
          className="accordion accordion-flush border-top border-start border-end"
          id="myAccordion"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What are the different types of accounts?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse border-0"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#myAccordion"
            >
              <div className="accordion-body p-0">
                {" "}
                <ul className="list-unstyled m-0">
                  <li>
                    <p> There are 4 kinds of accounts.</p>
                    <ul>
                      <li>
                        <strong>General</strong> - General Accounts can NOT
                        create new events. This is to keep the integrity of the
                        Artist, Venue or Promoter the event is representing.
                        General Accounts can still have a profile and save
                        events to their list.
                      </li>
                      <li>
                        <strong>Artist</strong> - Artist Accounts are for
                        representing an Artist or Band. These accounts also have
                        profiles however CAN create events. These accounts
                        require additional verification to create to keep the
                        integrity of the Artist brand.
                      </li>
                      <li>
                        <strong>Venue</strong> - Venue Accounts are for
                        representing an Artist or Band. These accounts also have
                        profiles however CAN create events. These accounts
                        require additional verification to create to keep the
                        integrity of the Venue brand.
                      </li>
                      <li>
                        <strong>Promoter</strong> - Promoter Accounts are for
                        representing an Artist or Band. These accounts also have
                        profiles however CAN create events. These accounts
                        require additional verification to create to keep the
                        integrity of the Promoter brand.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                How does Account Verification work for Artists, Venues and
                Promoters?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse border-0"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#myAccordion"
            >
              <div className="accordion-body p-0">
                <ul className="list-unstyled m-0">
                  <li>
                    When signing up, you have the choice between 4 types of
                    account. Any account NOT a General account, will require
                    additional verification. Below is the process for
                    verification:
                    <ul>
                      <li>
                        The form is filled out and on submission, will be
                        emailed to our mailbox.
                      </li>
                      <li>
                        We recive the request to our mailbox and reach out
                        either by phone or email to verify the account being
                        created.
                      </li>
                      <li>
                        Once verified, we will email a special account creation
                        link where you will be able to create your respective
                        account.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
