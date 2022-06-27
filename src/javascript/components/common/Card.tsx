import React, {PureComponent} from 'react';
import Link from "next/link";


interface Props {
  image: string,
  imageAlt: string,
  name: string,
  description: string,
  price: number,
  cardLink: string,
  buttonText: string,
}

class Card extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {image, imageAlt, buttonText, name, description, price, cardLink} = this.props;
    return (
      <div
        className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link href={cardLink}>
          <a>
            <img className="rounded-t-lg" src={image} alt={imageAlt}/>
          </a>
        </Link>
        <div className="p-5">
          <div className={'flex justify-between'}>
            <Link href={cardLink}>
              <a>
                <h5
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
              </a>
            </Link>
            <h5
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${price}</h5>
          </div>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <Link href={cardLink}>
            <a
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {buttonText}
            </a>
          </Link>
        </div>
      </div>
    );
  }
}


export default Card;
