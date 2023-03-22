def cigar_party(cigars, is_weekend):
  return (is_weekend and cigars >= 40) or (cigars >= 40 and cigars <= 60)