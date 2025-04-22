import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bottlesonclick';


  services = [
    {
      image: 'https://images.unsplash.com/photo-1597290282695-edc43d0e7129?w=900&auto=format&fit=crop&q=60',
      title: 'Bar Setup',
      description: 'Complete bar installation at your office event.'
    },
    {
      image: 'https://media.istockphoto.com/id/1144578806/photo/professional-bartender-adding-to-a-cocktail-in-the-glass-with-a-whipped-cream-a-grated-nutmeg.webp?a=1&b=1&s=612x612&w=0&k=20&c=3vb_JHJ98nesBZFEOzWzFX4J2Z9ndgkivFwSvz5cF8s=',
      title: 'Expert Mixologists',
      description: 'Skilled bartenders to serve creative cocktails.'
    },
    {
      image: 'https://images.unsplash.com/photo-1599172995721-49309fff2f21?w=900&auto=format&fit=crop&q=60',
      title: 'Custom Drink Menus',
      description: 'Tailored beverage menus for your corporate vibe.'
    },
    {
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&auto=format&fit=crop&q=60',
      title: '500+ Events',
      description: 'Join the ranks of our satisfied corporate clients.'
    }
  ];

  products = [
    {
      image: 'https://images.unsplash.com/photo-1665610975083-8e555835b987?w=900&auto=format&fit=crop&q=60',
      title: 'Premium Whiskey',
      description: 'Rich and smoky. Now 20% off!'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1673347666309-c251fb6c1d5f?w=900&auto=format&fit=crop&q=60',
      title: 'Fine Wine',
      description: 'Perfect for team toasts. Save 15%!'
    },
    {
      image: 'https://images.unsplash.com/photo-1590578455926-60dde6d06d56?w=900&auto=format&fit=crop&q=60',
      title: 'Top-Shelf Vodka',
      description: 'Smooth and clean. Limited time deal!'
    }
  ];
}
