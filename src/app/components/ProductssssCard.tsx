import { Badge } from 'lucide-react';
import Image from 'next/image';
import { Card, CardHeader, CardContent } from './ui/card';

interface Product {
  id: number;
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  title: string;
  description: string;
  imageUrl: string;
}

function ProductCard({ price, discountPercentage, isNew, title, description, imageUrl, id }: Product) {
  return (
    <Card onClick={() => window.location.href = `/product/${id}`}>
      <CardHeader>
        <Image src={imageUrl} alt={title} width={300} height={200} />
        {isNew && <Badge>New</Badge>}
      </CardHeader>
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>${price}</div>
        {discountPercentage && <Badge>{discountPercentage}% OFF</Badge>}
      </CardContent>
    </Card>
  );
}

export default ProductCard;