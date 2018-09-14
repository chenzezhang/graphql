import {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
	GraphQLString,
	GraphQLNonNull
} from 'graphql';

import { getPostById } from './data'

let count = 0;
let id = 0;

// export const schema = new GraphQLSchema({
// 	query: new GraphQLObjectType({ // 原始操作
// 		name: 'RootQueryType',
// 		fields: {
// 			count: {
// 				type: GraphQLInt,
// 				description: 'The count!',
// 				resolve: function () {
// 					return count;
// 				}
// 			}
// 		}
// 	}),
// 	mutation: new GraphQLObjectType({  // 数据操作
// 		name: 'RootMutationType',
// 		fields: {
// 		  updateCount: {
// 			type: GraphQLInt,
// 			description: 'Update the count',
// 			resolve: function() {
// 			  count += 1;
// 			  return count;
// 			}
// 		  }
// 		}
// 	  })
// });

const ItemService = (id: number) => {
	const items = [
		{id: '1', title: 'Item 1',price:'100', pic:'11'},
		{id: '2', title: 'Item 2',price:'100', pic:'11'},
		{id: '3', title: 'Item 3',price:'100', pic:'11'},
		{id: '4', title: 'Item 4',price:'100', pic:'11'},
		{id: '5', title: 'Item 5',price:'100', pic:'11'}
	  ];
	  return items[id];   
}

const ItemType = new GraphQLObjectType({
	name: "item",
	description: "item",
	fields: {
		id: {
			type: GraphQLString,
			description: "item id",
		},
		title: {
			type: GraphQLString,
			description: "item title"
		},
		price: {
			type: GraphQLString,
			description: "item price",
			resolve: (root: any, param: any, context: Function) => {
				return (root.price / 100).toFixed(2);
			}
		},
		pic: {
			type: GraphQLString,
			description: "item pic url"
		},
		promotion: {
			type: GraphQLInt,
			description: "promotion price"
		}
	}
});

export const ItemSchema = new GraphQLSchema({
	query: new GraphQLObjectType({
	  name: "ItemQuery",
	  description: "query item",
	  fields: {
		item: {
		  type: ItemType,
		  description: "item",
		  args: {
			id: {
			  type: GraphQLInt,
			  required: true    //itemId required for query
			}
		  },
		  resolve: function(root, obj, ctx) {
			return ItemService(obj['id']);
		  }
		}
	  }
	})
  });