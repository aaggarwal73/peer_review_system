<h1>Peer Review System</h1>
  <h3>Here are the main things that are used and you should be somewhat aware of:</h3>
  <ul>
    <li>
      <div>
        <h4>NodeJs</h4>
        <p>
          Word for word Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.<br><br>The app can be started from the command line by running the command `node index.js`. Currently this starts our app and runs it on your localhost. I highly recommend installing the nodemon package using npm. Nodemon allows us to keep the project running and restarts it whenever specific files are saved. This prevents us from having to continually restart the app every time we make a change.
        </p>
      </div>
    </li>
    <li>
      <div>
        <h4>Npm</h4>
        <p>
          Npm is a package manager. With it we can import modules that allow us to expand our app. The packges that we have imported using npm can be seen in the package.json file. It lists other useful information such as whether the imported module is being used in just dev or both dev and production.<br><br>The modules and their associated files are located in the node_modules directory. We should not include these in our commits as they can easily be reinstalled by running `npm install` on the command line.
        </p>
      </div>
    </li>
    <li>
      <div>
        <h4>Webpack Module</h4>
        <p>
          This module is imported and used to serve modules normally used in a nodeJs environment (server side) and makes them available on the client side. The packages and modules exposed by Webpack we use can be referenced in the components.js and components.scss files. The webpack.config.js file is also a part of webpack and do more with exposing our modules.
        </p>
      </div>
    </li>
  </ul>
