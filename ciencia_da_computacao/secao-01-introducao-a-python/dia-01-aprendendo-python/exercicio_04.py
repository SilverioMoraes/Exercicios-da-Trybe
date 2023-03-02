def greater_amount_of_characters(names):
    return max(names, key=len)


print(greater_amount_of_characters(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))