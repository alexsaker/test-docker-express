# test-docker-express

This is a small test project to test express image build with a production

## Getting Started

In order to use it, you can clone the project

```
git clone https://github.com/alexsaker/test-docker-express
```

and install it

```
npm install
```

### Prerequisites

No prerequisites needed

### Running

To Build

```
npm run build:dev
```

To Serve

```
npm run serve:dev
```

To Build & Serve

```
npm run watch:dev
```

To Run With Docker

```
npm run build:prod
docker build -t yourname/test-docker-express .
docker run -p 49160:8080 yourname/test-docker-express
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Alexandre Saker** - _Initial work_ - [GitHub](https://github.com/alexsaker)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
