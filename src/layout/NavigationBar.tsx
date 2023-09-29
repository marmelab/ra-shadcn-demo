import {
	NavigationMenuContent,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useGetList } from "ra-core";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
	const { data: categories = [] } = useGetList("categories", {
		pagination: { page: 1, perPage: 1000 },
		sort: { field: "name", order: "ASC" },
	});
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem className="grow">
					React-Admin Shadcn Demo
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Products</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							<li>
								<NavigationMenuLink asChild>
									<Link to="/products">All products</Link>
								</NavigationMenuLink>
							</li>
							{categories.map((category) => (
								<li key={category.id}>
									<NavigationMenuLink asChild>
										<Link
											to={`/products?filter=${encodeURIComponent(
												JSON.stringify({
													category_id: category.id,
												})
											)}`}
										>
											{category.name}
										</Link>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link to="/categories" className={navigationMenuTriggerStyle()}>
							Categories
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};
