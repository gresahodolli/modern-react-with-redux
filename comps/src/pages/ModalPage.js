import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }
    
    const actionBar = (
    <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
    );

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept 
        </p>
    </Modal>

  return (
    <div>
         <Button onClick={handleClick} primary>Open Modal</Button> 
        { showModal && modal }
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod arcu sed purus efficitur dapibus. Cras gravida bibendum malesuada. Quisque ante justo, feugiat vel elit vitae, cursus mollis mauris. Cras ut laoreet metus. Mauris feugiat eleifend diam, laoreet eleifend justo. Proin laoreet est ut ligula lacinia hendrerit. Vivamus et velit sollicitudin, rutrum lectus a, blandit augue. Curabitur viverra dignissim neque, sit amet tempor dolor pharetra in. Maecenas dignissim lorem efficitur, vulputate leo ac, rutrum velit. Suspendisse et placerat velit. Proin eget viverra lacus. Quisque a elementum enim.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod arcu sed purus efficitur dapibus. Cras gravida bibendum malesuada. Quisque ante justo, feugiat vel elit vitae, cursus mollis mauris. Cras ut laoreet metus. Mauris feugiat eleifend diam, laoreet eleifend justo. Proin laoreet est ut ligula lacinia hendrerit. Vivamus et velit sollicitudin, rutrum lectus a, blandit augue. Curabitur viverra dignissim neque, sit amet tempor dolor pharetra in. Maecenas dignissim lorem efficitur, vulputate leo ac, rutrum velit. Suspendisse et placerat velit. Proin eget viverra lacus. Quisque a elementum enim.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod arcu sed purus efficitur dapibus. Cras gravida bibendum malesuada. Quisque ante justo, feugiat vel elit vitae, cursus mollis mauris. Cras ut laoreet metus. Mauris feugiat eleifend diam, laoreet eleifend justo. Proin laoreet est ut ligula lacinia hendrerit. Vivamus et velit sollicitudin, rutrum lectus a, blandit augue. Curabitur viverra dignissim neque, sit amet tempor dolor pharetra in. Maecenas dignissim lorem efficitur, vulputate leo ac, rutrum velit. Suspendisse et placerat velit. Proin eget viverra lacus. Quisque a elementum enim.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod arcu sed purus efficitur dapibus. Cras gravida bibendum malesuada. Quisque ante justo, feugiat vel elit vitae, cursus mollis mauris. Cras ut laoreet metus. Mauris feugiat eleifend diam, laoreet eleifend justo. Proin laoreet est ut ligula lacinia hendrerit. Vivamus et velit sollicitudin, rutrum lectus a, blandit augue. Curabitur viverra dignissim neque, sit amet tempor dolor pharetra in. Maecenas dignissim lorem efficitur, vulputate leo ac, rutrum velit. Suspendisse et placerat velit. Proin eget viverra lacus. Quisque a elementum enim.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod arcu sed purus efficitur dapibus. Cras gravida bibendum malesuada. Quisque ante justo, feugiat vel elit vitae, cursus mollis mauris. Cras ut laoreet metus. Mauris feugiat eleifend diam, laoreet eleifend justo. Proin laoreet est ut ligula lacinia hendrerit. Vivamus et velit sollicitudin, rutrum lectus a, blandit augue. Curabitur viverra dignissim neque, sit amet tempor dolor pharetra in. Maecenas dignissim lorem efficitur, vulputate leo ac, rutrum velit. Suspendisse et placerat velit. Proin eget viverra lacus. Quisque a elementum enim.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod arcu sed purus efficitur dapibus. Cras gravida bibendum malesuada. Quisque ante justo, feugiat vel elit vitae, cursus mollis mauris. Cras ut laoreet metus. Mauris feugiat eleifend diam, laoreet eleifend justo. Proin laoreet est ut ligula lacinia hendrerit. Vivamus et velit sollicitudin, rutrum lectus a, blandit augue. Curabitur viverra dignissim neque, sit amet tempor dolor pharetra in. Maecenas dignissim lorem efficitur, vulputate leo ac, rutrum velit. Suspendisse et placerat velit. Proin eget viverra lacus. Quisque a elementum enim.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod arcu sed purus efficitur dapibus. Cras gravida bibendum malesuada. Quisque ante justo, feugiat vel elit vitae, cursus mollis mauris. Cras ut laoreet metus. Mauris feugiat eleifend diam, laoreet eleifend justo. Proin laoreet est ut ligula lacinia hendrerit. Vivamus et velit sollicitudin, rutrum lectus a, blandit augue. Curabitur viverra dignissim neque, sit amet tempor dolor pharetra in. Maecenas dignissim lorem efficitur, vulputate leo ac, rutrum velit. Suspendisse et placerat velit. Proin eget viverra lacus. Quisque a elementum enim.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod arcu sed purus efficitur dapibus. Cras gravida bibendum malesuada. Quisque ante justo, feugiat vel elit vitae, cursus mollis mauris. Cras ut laoreet metus. Mauris feugiat eleifend diam, laoreet eleifend justo. Proin laoreet est ut ligula lacinia hendrerit. Vivamus et velit sollicitudin, rutrum lectus a, blandit augue. Curabitur viverra dignissim neque, sit amet tempor dolor pharetra in. Maecenas dignissim lorem efficitur, vulputate leo ac, rutrum velit. Suspendisse et placerat velit. Proin eget viverra lacus. Quisque a elementum enim.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod arcu sed purus efficitur dapibus. Cras gravida bibendum malesuada. Quisque ante justo, feugiat vel elit vitae, cursus mollis mauris. Cras ut laoreet metus. Mauris feugiat eleifend diam, laoreet eleifend justo. Proin laoreet est ut ligula lacinia hendrerit. Vivamus et velit sollicitudin, rutrum lectus a, blandit augue. Curabitur viverra dignissim neque, sit amet tempor dolor pharetra in. Maecenas dignissim lorem efficitur, vulputate leo ac, rutrum velit. Suspendisse et placerat velit. Proin eget viverra lacus. Quisque a elementum enim.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod arcu sed purus efficitur dapibus. Cras gravida bibendum malesuada. Quisque ante justo, feugiat vel elit vitae, cursus mollis mauris. Cras ut laoreet metus. Mauris feugiat eleifend diam, laoreet eleifend justo. Proin laoreet est ut ligula lacinia hendrerit. Vivamus et velit sollicitudin, rutrum lectus a, blandit augue. Curabitur viverra dignissim neque, sit amet tempor dolor pharetra in. Maecenas dignissim lorem efficitur, vulputate leo ac, rutrum velit. Suspendisse et placerat velit. Proin eget viverra lacus. Quisque a elementum enim.
        </p>
    </div>
  )
}

export default ModalPage;
